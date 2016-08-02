# Change Log
All notable changes to this project will be documented in this file. This project attempts to adhere to [Semantic Versioning](http://semver.org/). We also try to use [http://keepachangelog.com/](http://keepachangelog.com/) formatting for this file to make it easier to update and read.

## [Unreleased]
_(add items here to be added to future release)_

## 1.1.0 2016-08-02
### Added
- Support for peerDependency `react@^0.14.6 || 15.x`
- Changelog formatting for better release tracking

### Changed
- Repo files (.gitignore, README.md)

### Fixed
- Bug causing `[]` to show at end of messages using `<Text />` introduced [here](https://github.com/sprjr/react-localize/blob/fde285cb2392194db7712a619f040b0c21daecaf/src/Localization.jsx#L35).

## 1.0.0
Intial release of `<Localization />` wrapper and `<Text />` helper components for looking up keys in a message bundle and localizing text. Includes interpolation, custom rendering options, and context helper function.
