# Puppet Extension for Visual Studio Code, now with Linter

The Puppet Extension for Visual Studio Code offers rich language support for Puppet DSL, snippets, and linter when using [Visual Studio Code](http://code.visualstudio.com).

## Requirements
puppet-lint ruby gem http://puppet-lint.com/

```
sudo gem install puppet-lint
```

## Features

### Syntax Keywords
- Puppet DSL Syntax

### Snippets
- augeas
- case
- cron
- define
- exec
- fail
- file
- file_line
- group
- if
- elsif
- else
- mount
- node
- package
- service
- unless
- user
- yumrepo
- versioncmp
- zfs
- zpool

### Disable Checks
To disable various checks, create a `~/.puppet-lint.rc` file. Add switches, one per line. For full list of switches run `puppet-lint --help`

```
--no-80chars-check
--no-case_without_default-check
```

## Contributions

Contributions are welcomed, please file issues and pull requests via the [project homepage](https://github.com/blindly/vscode-puppet).

### Thanks to contributors
- [blindly](https://github.com/blindly)
- [jgreat](https://github.com/jgreat)
- [dhollinger](https://github.com/dhollinger)
- [mikemimik](https://github.com/mikemimik)

## Changelog
- 0.2.0 - Added MIT License
- 0.3.0 - Merged with [Puppet Linter Extension](https://github.com/jgreat/vscode-puppetlinter)
- 0.3.1 - Removed old Puppet file detection documentation
