import { test, expect } from '@playwright/test';

test('form submission works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Fill out the form
  await page.fill('input[placeholder="Enter your full name"]', 'John Doe');
  await page.fill('input[placeholder="you@example.com"]', 'john@example.com');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Check for success message
  await expect(page.getByText('Form submitted successfully!')).toBeVisible();
});