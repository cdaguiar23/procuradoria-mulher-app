# TODO: Implement Direitos Screen

## Breakdown of Approved Plan

1. **[x] Create TODO.md** - Document the steps for tracking progress.
2. **[x] Edit src/screens/DireitosScreen.tsx** - 
   - Add necessary imports (useState, TouchableOpacity, Linking, Alert, icons: ChevronDown, User, BookOpen, FileText).
   - Set up component with title "Conheça seus Direitos" and subtitle.
   - Implement main card View with expandable sections for the 4-5 questions using useState for toggle.
   - Add bottom section for "Precisa de um advogado para denunciar?" with icons and TouchableOpacity (placeholder action: Alert).
   - Define styles consistent with BOScreen (colors, padding, etc.).
   - Use placeholders for expandable content since specifics not provided.
3. **[x] Update TODO.md** - Mark step 2 as complete and note any issues.
4. **[x] Test Implementation** - 
   - Run the app with `npx expo start --web`.
   - Verified app loads without errors (minor deprecation warnings for shadow styles, common in RN web).
   - Navigated to Direitos tab via browser simulation; screen renders with title, subtitle, expandable sections, and bottom icons.
   - Expand/collapse works (tested via interactions); alert shows on icon press.
   - UI consistent with BOScreen styles; responsive in web view.
5. **[x] Address User Feedback** - 
   - Removed icons from "Precisa de um advogado para denunciar?" section.
   - Converted it to a fifth expandable accordion section with provided response text, matching the style of upper questions.
   - Verified no redundant code; styles cleaned up.
6. **[x] Update TODO.md** - Mark improvements complete.
7. **[x] Attempt Completion** - Present final result.
