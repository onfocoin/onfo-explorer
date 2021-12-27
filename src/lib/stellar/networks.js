const networks = {
  public: "public",
  test: "test",
  local: "local",
};

const hostnameToNetworkType = (hostname) => {
  if (hostname === "explorer.onfocoin.com") return networks.public;
  else if (hostname === "horizon-legacy.dev.sprockets.io") return networks.test;
  else return networks.local;
};

export { networks as default, hostnameToNetworkType };
