#!/bin/bash

read -p "Did your code run fine and you want to push? (y/n): " confirm

if [ "$confirm" = "y" ]; then
  git add .
  changed_files=$(git diff --cached --name-only)
  msg="Update: $changed_files"

  git commit -m "$msg"
  git push origin main
  echo "Pushed successfully!"
else
  echo "Not pushing. Fix and re-run."
fi
