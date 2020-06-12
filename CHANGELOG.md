# Change Log
All notable changes to this project will be documented in this file. This project
attempts to adhere to [Semantic Versioning](http://semver.org/). We also try to use
[http://keepachangelog.com/](http://keepachangelog.com/) formatting for this file to
make it easier to update and read.

## [Unreleased]
_(add items here to be added to future release)_

## 2019-07-15 5.1.0
### Added
- `LocalizationContext` is exposed for being used in classes with context api
- documentation on `withLocalization` and `LocalizationContext`

## 2019-07-15 5.0.1
### Changed
- Provide ability to use empty string as translation

## 2019-05-01 5.0.0
### Added
- Added `useLocalize` hook.

## 2018-06-19 4.0.0-beta.2
### Added
- More documentation (migration guide, `<Text/>` replacement guide)
- Made a few fixes to the `_localize` internal function flow, although
the order of operations here may need to change again if there's feedback
around the current way we invoke / don't invoke `props.localize`.

## 4.0.0-beta.1
### Added
- Support for older react versions via `create-react-context`

### Changed
- Basically everything. Aligned with `react-access` from a deps/structure/tooling standpoint
- The entire API is updated, while conceptually the same its now more
in line with the latest React Context functionality
- Documentation matches up more with the new API. Which is _probably_ for the best?

### Removed
- the `<Text/>` component is no longer in the API at all, and we will plan to add documentation
on how you can build a simple one yourself using `withLocalization()`.


## 3.0.0, 3.0.0-beta 2017-04-26
### Added
- Support for React 15.5 💯
  - `peerDependencies` now includes `prop-types` 🎉.
  - I don't have a strategy yet for you to only include that in development, and
  strip PropTypes in prod bundles, but that is what you should do especially if size is a concern.

### Changed
- Updated devDependencies for mocha & babel-register 👍
- Update Travis CI matrix to test against a wider variety of
node and react versions.

## 2.0.1 2017-04-03
### Added
- Tests for `<Text/>` that assert it can work with larger, nested bundles by default

### Changed
- Published module now only includes `build/` files, and doesn't download src/test files not
needed for consumption.
- Precommit rule/script has been disabled until linting is fixed.

### Fixed
- Width formatting on some lines in the this CHANGELOG
- `PropTypes` correctly indicate any object can be passed, not just `objectOf(string)`

## 2.0.0 2017-02-14
### Added
- Support for `.eslintrc`, code clean up to get `src/` directory passing new rules
- Connected components can now log warnings out when `_localizeDebug` is set, and will
always be passed a safe to invoke function regardless of a missing context function.

### Changed
- Localization Connector now behaves more like redux `connect()` in that it passes
`localize()` as a prop to components now, removing the need for components to access
context.
- Project now uses `save-exact` for installed dependencies

## 1.1.1 2016-08-02
### Fixed
- Bug to handle passing `null` to `localize('label', null)` more gracefully

## 1.1.0 2016-08-02
### Added
- Support for peerDependency `react@^0.14.6 || 15.x`
- Changelog formatting for better release tracking

### Changed
- Repo files (.gitignore, README.md)

### Fixed
- Bug causing `[]` to show at end of messages using `<Text />` introduced [here](https://github.com/stevey-p/react-localize/blob/fde285cb2392194db7712a619f040b0c21daecaf/src/Localization.jsx#L35).

## 1.0.0
Intial release of `<Localization />` wrapper and `<Text />` helper components for looking up keys in
a message bundle and localizing text. Includes interpolation, custom rendering options, and
context helper function.
