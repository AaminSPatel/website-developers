# 3D Effects Implementation Plan (Approved)

## Progress: 11/15 ✅

### Phase 1: Header & Footer (Priority - User Specified)
- ✅ 1. Edit components/Header.jsx: Replace ui/Button → SquircleButton, add three-d-box-white to logo
- ✅ 2. Edit components/Footer.jsx: Add three-d-box-white to social icons & logo divs

### Phase 2: Home Components
- ✅ 3. Edit components/home/ProjectsSection.jsx: Replace Button → SquircleButton, add class to Cards
- [ ] 4. Verify other home/* (Services, Hero, Cta already partially done)

### Phase 3: Page Clients
- ✅ 5. Edit app/about/AboutClient.jsx: Replace Button, add classes to Cards
- ✅ 6. Edit app/services/ServicesClient.jsx: Replace Buttons, add classes
- ✅ 7. Edit app/projects/ProjectsClient.jsx: Replace Buttons, add classes
- [ ] 8. Edit app/blog/BlogClient.jsx & RelatedBlogs.jsx: Replace Buttons
- [ ] 9. Edit app/blog/[slug]/BlogSlugClient.jsx: Replace Buttons
- [ ] 10. Edit app/projects/[slug]/ProjectSlugClient.jsx: Replace Buttons
- [ ] 11. Edit app/terms/TermsClient.jsx: Replace Button

### Phase 4: Final Checks
- [ ] 12. Add missing SquircleButton imports
- [ ] 13. Test: npm run dev, check Header/Footer buttons/boxes, mobile responsiveness
- [ ] 14. Expand three-d-box-white to remaining Cards/divs if needed
- [ ] 15. attempt_completion

**Next Step:** Editing Header.jsx + Footer.jsx
