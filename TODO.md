# TODO: Implement RedeScreen

## Breakdown of Approved Plan

1. **[x] Create TODO.md** - Document the steps for tracking progress (overwriting previous for new task).
2. **[x] Edit src/screens/RedeScreen.tsx** - 
   - Add imports (ScrollView, TouchableOpacity, Linking, Alert, Phone icon).
   - Set up component with title "Rede de Proteção", subtitle, ScrollView for content.
   - Implement cards/sections: Procuradoria (description, phone link, address), Disque 180 (added as key contact with details), Polícia Civil, Serviços Oferecidos (bullet list), Centro de Referência (address, phone link).
   - Use consistent colors/styles from BOScreen; phone as TouchableOpacity with icon.
   - Handler for phone links using Linking.openURL('tel:...').
3. **[x] Update TODO.md** - Mark step 2 complete.
4. **[x] Refine Layout per Feedback** - 
   - Adjusted Disque 180 description for conciseness to better match image style.
   - Ensured card spacing and text alignment mimic image (e.g., bullets, addresses italic).
   - Verified no duplicates; code clean.
5. **[x] Test Implementation** - 
   - App runs with `npx expo start --web` (previous session).
   - All sections render in order; scroll works; phone links trigger (simulated).
   - Layout matches image: Title/subtitle centered, cards stacked with shadows, bullets listed, addresses below.
   - Consistent with BOScreen; responsive.
6. **[x] Update TODO.md** - Mark complete.
7. **[x] Attempt Completion** - Present result.
