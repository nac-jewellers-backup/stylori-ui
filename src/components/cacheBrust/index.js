/* CacheBuster component */
import React from "react";
// import packageJson from '../../../package.json';
// global.appVersion = packageJson.version;
// version from `meta.json` - first param
// version in bundle file - second param
const semverGreaterThan = (versionA, versionB) => {
  ;
  if (Number(versionA) !== Number(versionB)) {
    localStorage.setItem("version", versionA);
    return true;
  } else return false;
};

export default class CacheBuster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLatestVersion: false,
      refreshCacheAndReload: () => {
        console.log("Clearing cache and hard reloading...");

        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(function (names) {
            for (let name of names) caches.delete(name);
          });
        }
        // delete browser cache and hard reload
        window.location.reload(true);
      },
    };
  }

  componentDidMount() {
    fetch("/meta.json?_=" + new Date().getTime())
      .then((response) => response.json())
      .then((meta) => {
        const latestVersion = meta.version;
        let currentVersion;

        // checking dot is existing in local storage version for older versions
        if (localStorage.getItem("version")) {
          currentVersion = localStorage.getItem("version");
        } else {
          localStorage.setItem("version", latestVersion);
        }

        const shouldForceRefresh = semverGreaterThan(
          latestVersion,
          currentVersion
        );

        if (shouldForceRefresh) {
          ;
          console.log(
            `We have a new version - ${latestVersion}. Should force refresh`
          );
          this.setState({ loading: false, isLatestVersion: false });
        } else {
          console.log(
            `You already have the latest version - ${latestVersion}. No cache refresh needed.`
          );
          this.setState({ loading: false, isLatestVersion: true });
        }
      });
  }

  render() {
    const { loading, isLatestVersion, refreshCacheAndReload } = this.state;
    return this.props.children({
      loading,
      isLatestVersion,
      refreshCacheAndReload,
    });
  }
}
