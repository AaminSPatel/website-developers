#!/bin/bash
# Remove all TypeScript UI components that conflict with our custom JSX components
rm -f components/ui/*.tsx
rm -f components/ui/*.ts
echo "Cleanup complete - removed TypeScript UI component conflicts"
