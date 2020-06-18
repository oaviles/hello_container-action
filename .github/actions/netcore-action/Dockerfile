FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /source

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

COPY . .
# RUN dotnet build "netcore-action.csproj" -c Release -o /app/build

# copy and publish app and libraries
RUN dotnet publish "netcore-action.csproj" -c Release -o /app/publish

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["./netcore-action"]


#FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS base
#WORKDIR /app

#FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
#WORKDIR /src

#COPY *.csproj ./
#RUN dotnet restore "netcore-action.csproj"

#COPY . .

#RUN dotnet build "netcore-action.csproj" -c Release -o /app/build

#FROM build AS publish
#RUN dotnet publish "netcore-action.csproj" -c Release -o /app/publish

#FROM base AS final
#WORKDIR /app
#COPY --from=build /app/publish .
#ENTRYPOINT ["dotnet", "netcore-action.dll"]

