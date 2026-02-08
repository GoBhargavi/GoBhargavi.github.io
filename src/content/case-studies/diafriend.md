---
title: "DiaFriend: Transforming Diabetes Management with Flutter"
subtitle: "Smart Diabetes Management"
role: "Lead Mobile Developer"
duration: "1 Year"
stats: "10K+ Downloads"
technologies: ["Flutter", "Dart", "Firebase", "FlutterFlow", "Android"]
githubUrl: "https://github.com/GoBhargavi/DiaFriend-1.0"
impact: "10,000+ Downloads | Featured in UMass News"
heroImage: "/images/diafriend-hero.png"
---

## The Challenge
Access to effective diabetes management tools is often limited by language barriers and complex user interfaces. In the SouthCoast region of Massachusetts, the Portuguese-speaking community faced significant challenges in adhering to digital health solutions due to a lack of localized, accessible applications.

As the sole developer and researcher, I needed to architect a solution that was not only medically accurate but also culturally competent and accessible to elderly users with varying levels of digital literacy.

## The Solution
I built **DiaFriend**, a cross-platform mobile application using **Flutter** that focuses on simplicity, accessibility, and automation.

### Key Architectural Decisions

1.  **Flutter for Cross-Platform Consistency**: 
    I chose Flutter to deliver a native-quality experience on both iOS and Android from a single codebase. This was crucial for rapid iteration and ensuring consistent accessibility features across devices.

2.  **Serverless Backend with Firebase**:
    To minimize infrastructure overhead and ensure real-time data synchronization for caregivers, I utilized Firebase Firestore. This allowed for seamless offline-first capabilities—critical for users with intermittent internet access.

3.  **On-Device ML for Food Recognition**:
    Integrating Google ML Kit allowed users to log meals simply by taking photos. This reduced the friction of manual entry, a primary pain point in long-term adherence apps.

## Technical Deep Dive

### State Management & Architecture
The app follows a **Clean Architecture** pattern to separate business logic from UI code. I implemented BLoC (Business Logic Component) for predictable state management, which was essential for handling complex medical data flows and ensuring the UI always reflected the accurate health state.

```dart
// Example BLoC simplifying glucose tracking logic
class GlucoseBloc extends Bloc<GlucoseEvent, GlucoseState> {
  final GlucoseRepository repository;

  GlucoseBloc({required this.repository}) : super(GlucoseInitial()) {
    on<LoadGlucoseReading>((event, emit) async {
      emit(GlucoseLoading());
      try {
        final readings = await repository.getReadings(event.userId);
        emit(GlucoseLoaded(readings));
      } catch (e) {
        emit(GlucoseError(e.toString()));
      }
    });

    on<AddGlucoseReading>((event, emit) async {
       // Optimistic UI updates implementation
    });
  }
}
```

### Accessibility First
Every component was built with `Semantics` widgets to ensure full screen-reader support. I also implemented dynamic font scaling and high-contrast modes beyond standard system defaults to support users with diabetic retinopathy.

## Impact & Results
*   **Adoption**: Reached **10,000+ downloads** on the Google Play Store within the first 6 months.
*   **Community Impact**: Featured in UMass Dartmouth News for its specific impact on the local Portuguese community.
*   **Research Validation**: Data collected via the app (anonymized) contributed to nursing research on community health outcomes.

## Lessons Learned
Building DiaFriend taught me that **technology is only as good as its accessibility**. Architecting for the "edge case" user—those with low tech literacy or visual impairments—resulted in a better product for everyone. It reinforced my belief that engineering decisions must be driven by deep empathy for the end user.
