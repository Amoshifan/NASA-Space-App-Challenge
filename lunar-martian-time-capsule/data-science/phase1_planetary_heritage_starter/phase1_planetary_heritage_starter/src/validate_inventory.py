from pathlib import Path
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
objects = pd.read_csv(DATA / "objects.csv", dtype=str).fillna("")

errors, warnings = [], []
required = ["object_id", "object_name", "planet", "mission_id", "evidence_status"]
for col in required:
    if col not in objects.columns:
        errors.append(f"Missing required column: {col}")
    elif (objects[col].str.strip() == "").any():
        errors.append(f"Blank values found in required column: {col}")

if "object_id" in objects and objects["object_id"].duplicated().any():
    duplicates = objects.loc[objects["object_id"].duplicated(False), "object_id"].tolist()
    errors.append(f"Duplicate object IDs: {duplicates}")

if "planet" in objects:
    invalid = sorted(set(objects["planet"]) - {"Moon", "Mars"})
    if invalid:
        errors.append(f"Invalid planet values: {invalid}")

if len(objects) != 20:
    warnings.append(f"Expected 20 seed objects; found {len(objects)}.")

for col in ["location_latitude", "location_longitude"]:
    if col in objects:
        bad = objects[col].ne("") & pd.to_numeric(objects[col], errors="coerce").isna()
        if bad.any():
            errors.append(f"Non-numeric coordinate values in {col}: {objects.loc[bad, 'object_id'].tolist()}")

for _, row in objects.iterrows():
    lat, lon = row.get("location_latitude", ""), row.get("location_longitude", "")
    if (lat or lon) and (not lat or not lon):
        warnings.append(f"{row['object_id']}: only one coordinate component is populated.")
    if (lat or lon) and not row.get("coordinate_system", "").strip():
        warnings.append(f"{row['object_id']}: coordinates present without coordinate_system.")
    if row.get("evidence_status") == "verified" and not row.get("primary_source_url", "").strip():
        warnings.append(f"{row['object_id']}: marked verified but primary_source_url is blank; review claim-level evidence.")

print(f"Records: {len(objects)}")
print(f"Unique IDs: {objects['object_id'].nunique() if 'object_id' in objects else 'N/A'}")
print(f"Moon records: {(objects['planet'] == 'Moon').sum() if 'planet' in objects else 'N/A'}")
print(f"Mars records: {(objects['planet'] == 'Mars').sum() if 'planet' in objects else 'N/A'}")
print("\nERRORS")
print("\n".join(f"- {x}" for x in errors) if errors else "None")
print("\nWARNINGS")
print("\n".join(f"- {x}" for x in warnings) if warnings else "None")
if errors:
    raise SystemExit(1)
