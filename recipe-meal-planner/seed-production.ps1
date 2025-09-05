# PowerShell script to seed production database
Write-Host "Seeding production database..." -ForegroundColor Yellow

try {
    $response = Invoke-WebRequest -Uri "https://recipe-meal-planner-api.onrender.com/seed" -Method POST -Headers @{"Content-Type" = "application/json" }
    $content = $response.Content | ConvertFrom-Json
    Write-Host "Success!" -ForegroundColor Green
    Write-Host "Recipes inserted: $($content.recipesInserted)" -ForegroundColor Cyan
    Write-Host "Meal plans inserted: $($content.mealPlansInserted)" -ForegroundColor Cyan
    Write-Host $content.message -ForegroundColor Green
}
catch {
    Write-Host "Error seeding database:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host "Make sure the deployment is complete and try again in a few minutes" -ForegroundColor Yellow
}
