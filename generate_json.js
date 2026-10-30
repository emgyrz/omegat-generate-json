/* :name=Generate Json Data 
 * :description=Generates project data in json format.
 * 
 * @author  Maksim Zommer
 * @date    2026-10-29
 * @version 1.0
 */

var Files = Java.type('java.nio.file.Files')
var Paths = Java.type('java.nio.file.Paths')
var JavaStr = Java.type('java.lang.String')
var StandardOpenOption = Java.type('java.nio.file.StandardOpenOption')


var RESULT_FILE_NAME = 'project-data.json'


function gui() {
    
  var prop = project.projectProperties
  if (!prop) {
    mainWindow.showMessageDialog('No Loaded Project! Try again after opening a project.')
    return
  }

  var jsonData = {
    generatedAt: Date.now(),
    files: []
  }

  project.projectFiles.forEach(function (file) {
    var fileData = {
      file: collectDataFromFileInfo(file),
      segments: []
    }

    file.entries.forEach(function (ste) {      
      fileData.segments.push({
        source: collectDataFromSourceTextEntry(ste),
        translation: collectDataFromTXMEntry(project.getTranslationInfo(ste))
      })
    })

    jsonData.files.push(fileData)
  })


  Files.write(
    Paths.get(prop.projectRoot, RESULT_FILE_NAME), 
    new JavaStr(JSON.stringify(jsonData, null, 2)).getBytes(), 
    StandardOpenOption.CREATE
  )
}


/**
 * 
 * @param {FileInfo} file 
 * @link https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/IProject.FileInfo.html
 */
function collectDataFromFileInfo(file) {
  return {
      filePath: file.filePath,
      fileEncoding: file.fileEncoding,
      filterFileFormatName: file.filterFileFormatName,
  }
}

/**
 * 
 * @param {SourceTextEntry} ste
 * @link https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/SourceTextEntry.html
 */
function collectDataFromSourceTextEntry(ste) {
  return {
    entryNum: ste.entryNum(),
    comment: ste.getComment(),
    isParagraphStart: ste.isParagraphStart(),
    // isSourceTranslationFuzzy: ste.isSourceTranslationFuzzy(),
    srcText: ste.getSrcText(),
    // sourceTranslation: ste.getSourceTranslation(), 
  }
}


/**
 * 
 * @param {TMXEntry} tmxEntry
 * @link https://omegat.sourceforge.io/javadoc-standard/org/omegat/core/data/TMXEntry.html
 */
function collectDataFromTXMEntry(tmx) {
  if (!tmx) {
    return null
  }
  return {
    // changeDate: tmx.getChangeDate(),
    // changer: tmx.getChanger(),
    // creationDate: tmx.getCreationDate(),
    // creator: tmx.getCreator(),
    note: tmx.getNote(),
    translationText: tmx.getTranslationText(),
    // hashCode: tmx.hashCode(),
  }
}


