import { test, expect } from '@playwright/test';

test('solutions component renders items accurately', async ({ page }) => {
  await page.goto('/');

  // Verify the section heading
  const heading = page.locator('#soluciones h2');
  await expect(heading).toContainText('Áreas de enfoque');

  // Verify "Profesionales" solution
  const profTitle = page.locator('h3:has-text("Profesionales")');
  await expect(profTitle).toBeVisible();
  const profDesc = page.locator('p:has-text("Creamos espacios limpios que transmiten la seriedad")');
  await expect(profDesc).toBeVisible();

  // Verify "Impacto Social" solution
  const socialTitle = page.locator('h3:has-text("Impacto Social")');
  await expect(socialTitle).toBeVisible();
  const socialDesc = page.locator('p:has-text("Sitios que maximizan tu visibilidad con costos operativos mínimos")');
  await expect(socialDesc).toBeVisible();
});
