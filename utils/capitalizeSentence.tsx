function capitalizeSentence(sentence): string {
    let sentenceArray = sentence.split( ' ' );
    sentenceArray = sentenceArray.map( ( word: string ) => word[ 0 ].toUpperCase() + word.slice( 1 ) );
    return sentenceArray.join( ' ' );
}

export default capitalizeSentence