# finview
View market prices

# To Build
- From the command prompt do: rm -rf node_modules ios/Pods ios/build;make clean;make cleancache;yarn install;yarn pod:install;make pre-run

# Run on Android:
- launch Android Studio
- emulator -writable-system -avd Pixel_XL_API_28 -netdelay none -partition-size 4096 -netspeed full
- adb devices -l
- adb reverse tcp:8081 tcp:8081
- npm run start
- run app from Android Studio and choose emulator at startup
- If you have build problems in Android Studio then do:
    * shutdown android studio
    * mv android/finview.iml android/finview.iml.old
    * mv android/.idea/modules.xml android/.idea/old.modules.xml
    * restart android studio and try the sync and build again

# Run on iOS:
- launch Xcode
- open finview.xcworkspace
- run app in simulator

# To test
- npm run test


tradeData
