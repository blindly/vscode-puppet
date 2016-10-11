# PuppetLinter
Runs puppet-lint on save. 

* Github: https://github.com/jgreat/vscode-puppetlinter

### Requirements
puppet-lint ruby gem http://puppet-lint.com/

```
sudo gem install puppet-lint
```

### Disable Checks
To disable various checks, create a `~/.puppet-lint.rc` file. Add switches, one per line. For full list of switches run `puppet-lint --help`

```
--no-80chars-check
--no-case_without_default-check
```

### Puppet .pp File Detection
There is a vscode bug filed for Ruby taking .pp file association by default: https://github.com/Microsoft/vscode/issues/5366

When that bug is fixed, just installing this module should work. Until then add the following to your User Preferences json.
```
"files.associations": {
        "*.pp": "puppet"
}
```

### Changelog
* 0.1.1 - Update metadata and add icon.
* 0.0.1 - First version. Provide basic linting via puppet-lint.

### Acknowledgements
All props go to the excelent tutorial by hoovercj on github:
https://github.com/hoovercj/vscode-extension-tutorial

### Contributing
Please do. Fork the github repo and submit a PR. 