# Repository Guidance: RootRecord Cloud

This repository owns the Vercel web project for `rootrecord.cloud`.

## Scope

- Put RootRecord public web pages, components, static assets, and frontend tests here.
- Keep the app deployable as an independent Vercel project.
- Use documented public API contracts for backend data.
- Keep credentials in Vercel environment variables, never in source control.

## Boundaries

- `RootRecord-Core-Processor`: hosted APIs, ingestion, automation, and long-running jobs.
- `RootRecord-Core-Ops`: local operator desk and backups.
- `RootRecord-Core-Node`: MIT-licensed self-hostable node.
- `RootRecord-RootMC`: all RootMC development.

## License

No license. This repository is public for transparency and Vercel deployment only.
