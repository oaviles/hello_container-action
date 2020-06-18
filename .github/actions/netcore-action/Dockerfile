# https://hub.docker.com/_/microsoft-dotnet-core
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
# copy csproj and restore as distinct layers

WORKDIR /src
COPY *.csproj .
RUN dotnet restore "netcore-action.csproj"

# copy and publish app and libraries
COPY . .

RUN dotnet build "netcore-action.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "netcore-action.csproj" -c Release -o /app/publish

# final stage/image
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "netcore-actiondll"]


#FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
#WORKDIR /source

# Copy csproj and restore as distinct layers
#COPY *.csproj ./
#RUN dotnet restore

# copy and publish app and libraries
#COPY . .
#RUN dotnet publish -c release -o /app --no-restore

# Build runtime image
#FROM mcr.microsoft.com/dotnet/core/runtime:3.1
#WORKDIR /app
#COPY --from=build /app .

#ENTRYPOINT ["dotnet", "netcore-action.dll"]
