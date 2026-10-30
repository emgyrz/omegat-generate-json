# OmegaT script for generating project data in JSON format

## How to use 

Just copy `generate_json.js` to the OmegaT script directory (e.g., `~/.local/share/OmegaT/script` on Linux).
[Read docs about it here](https://omegat.readthedocs.io/en/latest/51.HowToWriteScript.html#script-locations)

Then it can be found in **Tools > Scripts** in application menu.


## Data fields

Fields are extracted from the following classes.

* [FileInfo](https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/IProject.FileInfo.html)
* [SourceTextEntry](https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/SourceTextEntry.html)
* [TMXEntry](https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/TMXEntry.html)

To modify the generated fields, uncomment them or add them or whatever within the corresponding functions `collectDataFrom*`.
