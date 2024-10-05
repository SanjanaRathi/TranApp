plugins {
    id("com.android.application")

    // Add the ID of the plugin
    id("FIREBASE_PLUGIN_ID")

  // Add the Google services Gradle plugin
  id("com.google.gms.google-services")

dependencies {
  // Import the Firebase BoM
  implementation(platform("com.google.firebase:firebase-bom:33.4.0"))

  // TODO: Add the dependencies for Firebase products you want to use
  // When using the BoM, don't specify versions in Firebase dependencies
  implementation("com.google.firebase:firebase-analytics")

  // Add the dependencies for any other desired Firebase products
  // https://firebase.google.com/docs/android/setup#available-libraries
}
}
