/* global ExtensionAPI */

this.prefchange = class extends ExtensionAPI {
  /**
   * Extension Shutdown
   * APIs that allocate any resources (e.g., adding elements to the browser’s user interface,
   * setting up internal event listeners, etc.) must free these resources when the extension
   * for which they are allocated is shut down.
   */
  onShutdown(shutdownReason) {
    console.log("onShutdown", shutdownReason);
    // TODO: remove any active ui
  }

  getAPI(context) {

    const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm", {});
    
    /*
    console.log("config", config);
    console.log("studyUtils", studyUtils);
    console.log("Feature", Feature);
    */

    const { startupReason } = this.extension;

    return {
      prefchange: {
        async setBoolPref(pref, value) {
          console.log(`About to set ${pref} to ${value}.`);
          // change the pref
          Services.prefs.setBoolPref(pref, value);

        },
      },
    };
  }
};

