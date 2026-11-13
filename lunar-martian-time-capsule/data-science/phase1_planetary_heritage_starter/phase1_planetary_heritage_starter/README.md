# Phase 1 — Planetary Heritage Data Science Starter Pack

## Purpose
This starter pack establishes a traceable, auditable seed dataset for the 20 Moon and Mars objects already selected for the Lunar & Martian Time Capsule project.

**Important:** the 20 rows are seed catalogue entries, not a declaration that every object, location, date, or image has already been independently verified. Empty fields are intentional. Do not replace unknown values with zero or guessed values.

## Files
- `data/objects.csv` — 20 seed object records.
- `data/missions.csv` — candidate mission-level source links; verify before relying on them.
- `data/sources.csv` — source register template.
- `data/evidence.csv` — claim-level evidence register template.
- `data/locations.csv` — coordinate provenance and reference-frame register.
- `data/images.csv` — image provenance and approval register.
- `data/verification_log.csv` — audit trail.
- `schemas/data_dictionary.csv` — field definitions.
- `schemas/object-schema.json` — JSON record schema.
- `src/validate_inventory.py` — basic inventory integrity checks.

## Setup in PowerShell
From the `data-science` folder in your project:
```powershell
Copy-Item ".\phase1_planetary_heritage_starter\*" "." -Recurse
```
If you extracted this ZIP elsewhere, adjust the source path. Do not overwrite existing work without checking first.

Run:
```powershell
python .\src\validate_inventory.py
```

## Evidence method
Grade each individual claim, not the object as a whole:
- A — direct primary mission evidence / original official mission data.
- B — authoritative institutional source or peer-reviewed support.
- C — secondary or incomplete support.
- D — unsupported or not yet substantiated.

Use `pending` when no grade can responsibly be assigned. Keep contradictory source values side-by-side with their own source and coordinate frame; do not silently reconcile them.

## Geospatial rules
Record planetary body, coordinate reference frame, latitude/longitude conventions, precision, location type, source, and uncertainty. A landing-site coordinate is not automatically the exact position of every deployed or discarded object.

## Image rules
Record original title, NASA image ID (if one exists), original URL, exact credit, image type, processing, and object-match review. Do not call an image a NASA image until its provenance is confirmed. Distinguish surface photography from orbital imagery and disclose false-colour or processed images.

## NASA planetary data standard reference
NASA PDS4 documentation and Data Provider's Handbook:
https://pds.nasa.gov/datastandards/documents/

This project uses simple CSV/JSON working tables for its research workflow. It is not claiming to be a PDS4-compliant archive submission.
