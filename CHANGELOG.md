# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Change categories are:

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for once-stable features removed in upcoming releases.
* `Removed` for deprecated features removed in this release.
* `Fixed` for any bug fixes.
* `Security` to invite users to upgrade in case of vulnerabilities.

## [Unreleased](https://github.com/saibotsivad/minimist-json/compare/v2.0.2...HEAD)

*Add changes here.*

## [3.1.0](https://github.com/saibotsivad/minimist-json/compare/v3.0.0...v3.1.0) - 2021-10-25
### Added
- Added `mjson` as an additional CLI command, aka a shortcut to `minimist-json`.

## [3.0.0](https://github.com/saibotsivad/minimist-json/compare/v2.0.2...v3.0.0) - 2021-04-23

This release does not introduce any other changes, so as long as you are using NodeJS
version 10 and above, the upgrade path is simply to update your installed version.

### Changed/Removed
- Dropped support for NodeJS versions that are [past EOL](https://endoflife.software/programming-languages/server-side-scripting/nodejs).

## [2.0.2](https://github.com/saibotsivad/minimist-json/compare/v2.0.0...v2.0.2) - 2021-04-22

### Added
- This changelog!

### Changed
- Get and set functions replaced with `dlv` and `dset`, respectively. Thanks @ArtskydJ 🎉

### Security
- Updated the version of `minimist` (old version had CVE issue). Thanks @TheBrockEllis 🎉
