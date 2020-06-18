FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /source

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy and publish app and libraries
COPY . .
RUN dotnet publish -c release -o /app --no-restore

RUN dir /source/bin/release/netcoreapp3.1/ *.*

# Build runtime image
# FROM mcr.microsoft.com/dotnet/core/runtime:3.1
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 
WORKDIR /app
COPY --from=build /app .

RUN dir /app *.*

ENTRYPOINT ["dotnet", "NetCore.Docker.dll"]
