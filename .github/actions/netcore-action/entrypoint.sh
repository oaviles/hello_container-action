cd /app

dotnet restore
dotnet build
dotnet run --project src/github-action
