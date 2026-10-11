<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use shared full-logo and mark-only assets for site branding; derive the favicon from the same mark to keep all placements consistent.
- Keep site images as plain files under `public/` referenced by root-relative paths, not host-specific CDN pointers, so a build runs identically on any hosting provider.
- Keep the standalone Node server preset in `vite.config.ts` so the code deploys to any Node host; Lovable's own build environment overrides the target, so publishing from Lovable keeps working.
