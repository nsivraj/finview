# finview
View market prices

rm -rf node_modules ios/Pods ios/build;make clean;make cleancache;yarn install;yarn pod:install;make pre-run

npm run test

Android:
launch Android Studio
adb devices -l
adb reverse tcp:8081 tcp:8081
emulator -writable-system -avd Pixel_XL_API_28 -netdelay none -partition-size 4096 -netspeed full
npm run start
run app from Android Studio and choose emulator at startup


iOS:
launch Xcode
open finview.xcworkspace
run app in simulator
