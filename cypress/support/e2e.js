import "./commands";

// Sample logic for blocking some of the hosts, e.g. some unnecessary API calls.
Cypress.Server.defaults({
  ignore: (xhr) => {
    return Cypress.config().blockHosts.some((blockedHost) =>
      Cypress.minimatch(new URL(xhr.url).host, blockedHost)
    );
  },
});
