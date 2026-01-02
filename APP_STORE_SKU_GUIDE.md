# App Store Connect SKU 생성 가이드

## SKU란?

SKU (Stock Keeping Unit)는 App Store Connect에서 앱을 식별하는 고유한 제품 식별자입니다. 번들 ID와는 별개로, 앱 스토어에서 내부적으로 사용하는 식별자입니다.

## SKU 생성 방법

### 1. App Store Connect 접속
1. [App Store Connect](https://appstoreconnect.apple.com) 접속
2. Apple Developer 계정으로 로그인

### 2. 앱 생성 및 SKU 설정
1. **"내 앱"** 클릭
2. **"+" 버튼** 클릭 → **"새로운 앱"** 선택
3. 다음 정보 입력:
   - **플랫폼**: iOS
   - **이름**: `쳌!(Chweck)` 또는 원하는 앱 이름
   - **기본 언어**: 한국어
   - **번들 ID**: `com.wootak.chweck` (이미 생성되어 있어야 함)
   - **SKU**: `CHWECK-001` 또는 원하는 고유 식별자 (예: `chweck-ios-v1`)

### 3. SKU 규칙
- 고유해야 함 (다른 앱과 중복 불가)
- 영문자, 숫자, 하이픈(-), 언더스코어(_) 사용 가능
- 대소문자 구분
- 예시:
  - `CHWECK-001`
  - `chweck-ios-v1`
  - `com.wootak.chweck.ios`
  - `chweck_app_2024`

## 현재 앱 정보

### 번들 ID
```
com.wootak.chweck
```

### 앱 이름
```
쳌!(Chweck)
```

### 권장 SKU 예시
- `CHWECK-001`
- `chweck-ios-v1`
- `com.wootak.chweck.ios`
- `wootak-chweck-ios`

## 번들 ID 생성 확인

번들 ID가 아직 생성되지 않았다면:

1. [Apple Developer](https://developer.apple.com) 접속
2. **Certificates, Identifiers & Profiles** 이동
3. **Identifiers** → **"+" 버튼** 클릭
4. **App IDs** 선택 → **Continue**
5. **App** 선택 → **Continue**
6. **Description**: `CHWEK App`
7. **Bundle ID**: `Explicit` 선택
8. **Bundle ID**: `com.wootak.chweck` 입력
9. **Capabilities** 선택 (필요한 경우)
10. **Continue** → **Register**

## 다음 단계

1. ✅ 번들 ID 생성 (`com.wootak.chweck`)
2. ⏳ App Store Connect에서 앱 생성 및 SKU 설정
3. ⏳ 앱 정보 입력 (설명, 스크린샷, 가격 등)
4. ⏳ 앱 빌드 및 업로드
5. ⏳ 심사 제출

## 참고

- SKU는 한 번 생성하면 변경할 수 없습니다
- SKU는 앱 스토어에 표시되지 않으며, 내부 식별용입니다
- 번들 ID와 SKU는 서로 다른 개념입니다

