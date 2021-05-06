###### Dockerfile V4 #######

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore -r linux-arm64

# copy and publish app and libraries
COPY . .
RUN dotnet publish -c release -o /app -r linux-arm64 --self-contained false --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/core/runtime:3.1
WORKDIR /app
COPY --from=build /app .

# DEBUG Folder
RUN ls 
RUN ls /app

#CMD ["/usr/bin/dotnet", "NetCore.Docker.dll"]
ENTRYPOINT ["/usr/bin/dotnet", "/app/netcore-action.dll"]
