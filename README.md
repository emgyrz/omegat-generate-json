# OmegaT script for generating project data in JSON format

## Install 

Just copy `generate_json.js` to OmegaT script directory (e.g., `~/.local/share/OmegaT/script` on Linux).
[Read docs about it here](https://omegat.readthedocs.io/en/latest/51.HowToWriteScript.html#script-locations)


## Data fields

Fields are taken from the following classes.

* [FileInfo](https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/IProject.FileInfo.html)
* [SourceTextEntry](https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/SourceTextEntry.html)
* [TMXEntry](https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/TMXEntry.html)

To modify the generated fields, uncomment them or add them or whatever within the corresponding functions `collectDataFrom*`.
