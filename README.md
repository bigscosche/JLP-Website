# JLP Home Improvement Website

Static marketing website for JLP Home Improvement.

## Stack
- HTML / CSS / JavaScript
- Hosted on Netlify
- Lead capture via Supabase Edge Function

## Features
- Service pages (roofing, siding, etc.)
- Contact form (connected to backend CRM)
- Mobile responsive layout

## Lead Capture
Form submissions are sent to:

https://mbopxgcdfcoucgnxiywe.supabase.co/functions/v1/capture-lead

Leads are stored in the CRM-V1 system.

## Deployment
- Connected to Netlify via GitHub
- Auto-deploys on push to `main`

## Notes
- This site is part of a larger system (CRM-V1)
- Each client site will follow a similar structure
