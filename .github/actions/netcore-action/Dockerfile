#### Dockerfile V1 ######

#FROM mcr.microsoft.com/dotnet/core/runtime:3.1 AS base
#WORKDIR /app

#FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
#WORKDIR /src

#COPY *.csproj ./
#RUN dotnet restore "netcore-action.csproj"

#COPY . .

#RUN dotnet build "netcore-action.csproj" -c Release -o /app/build

#FROM build AS publish
#RUN dotnet publish "netcore-action.csproj" -c Release -o /app/publish

#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app/publish .
#CMD ["dotnet", "netcore-action.dll"]

 
##### Dockerfile V3 ######
 
#FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
#WORKDIR /source

# copy csproj and restore as distinct layers
#COPY *.csproj .
#RUN dotnet restore

# copy and publish app and libraries
#COPY . .
#RUN dotnet publish -c release -o /app --no-restore

# final stage/image
#FROM mcr.microsoft.com/dotnet/core/runtime:3.1
#WORKDIR /app
#COPY --from=build /app .
#CMD ["dotnet", "netcore-action.dll"]

###### Dockerfile V4 #######

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

# copy and publish app and libraries
COPY . .
RUN dotnet publish -c release -o /app -r linux-arm64 --self-contained false --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/core/runtime:3.1
WORKDIR /app
COPY bin/Release/netcoreapp3.1/publish/ app/

# DEBUG Folder
RUN ls bin/Release/netcoreapp3.1/publish/
RUN ls bin/
COPY --from=build /app .

ENTRYPOINT ["dotnet", "netcore-action.dll"]
