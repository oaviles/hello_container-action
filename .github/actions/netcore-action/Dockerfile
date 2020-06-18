FROM mcr.microsoft.com/dotnet/core/aspnet:3.1

RUN dotnet publish -c Release

COPY bin/Release/netcoreapp3.1/publish/ App/
WORKDIR /App
ENTRYPOINT ["dotnet", "NetCore.Docker.dll"]
