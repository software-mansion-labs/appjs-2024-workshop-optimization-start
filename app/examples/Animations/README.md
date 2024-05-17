# Animations

## References

- https://docs.swmansion.com/react-native-reanimated/docs/guide/debugging/ 
- https://github.com/software-mansion/react-native-reanimated/issues/3854#issuecomment-1369862321
- https://ui.perfetto.dev/ 
- https://developer.android.com/topic/performance/tracing
- https://stackoverflow.com/questions/30149363/using-systrace-in-application-code-android 
- https://hermesengine.dev/docs/memory-profilers/ 
- https://reactnative.dev/docs/profiling 
- https://square.github.io/leakcanary/
- https://square.github.io/leakcanary/changelog/#version-210-2022-11-10
- https://square.github.io/leakcanary/shark/
- https://fbflipper.com/docs/features/plugins/leak-canary/
- https://repo1.maven.org/maven2/com/facebook/react/react-android/0.71.6/
- https://oss.sonatype.org/content/repositories/snapshots/com/facebook/react/react-android/

```sh
find . -name libreanimated.so
file /path/to/libreanimated.so
nm -DC /path/to/libreanimated.so
```
