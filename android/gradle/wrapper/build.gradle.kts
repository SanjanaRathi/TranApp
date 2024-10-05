buildscript {

    repositories {
      // Make sure that you have the following two repositories
      google()  // Google's Maven repository
      mavenCentral()  // Maven Central repository
    }

    dependencies {
      ...

      // Add the Maven coordinates and latest version of the plugin
      classpath ("PLUGIN_MAVEN_COORDINATES:PLUGIN_VERSION")
    }
}

allprojects {
  ...

  repositories {
    // Make sure that you have the following two repositories
    google()  // Google's Maven repository
    mavenCentral()  // Maven Central repository
  }
}
