function shortestSubstring(s) {
  const charsNeeded = [...new Set(s.match(/[a-z]/g))];
  const hasNeededChars = str => charsNeeded.every(l => str.indexOf(l) > -1);
  let candidates = [];

  for (let i = 0; i <= s.length; i++) {
    // Working from the left, create a substring that increases in length by
    // one char each iteration
    const s1 = s.substring(0, i);

    // If the substring in this iteration contains all required chars, continue
    if (hasNeededChars(s1)) {
      for (let j = 0; j <= s1.length; j++) {
        // Now, work from the right, creating a substring that increases in
        // length by one. The reason we need this is because there can be
        // duplicate needed chars at the begginning of the first string in
        // s1 that will skew our results.
        const s2 = s1.substring(j, s.length);

        // Again, check to see if the substring in this iteration contains
        // all required chars. If so, add it to the candidates list.
        if (hasNeededChars(s2)) {
          candidates.push(s2);
        }
      }
    }
  }

  // Finally, sort the candidates from shortest to longest and choose the
  // first one, that will be the shortest.
  const shortest = candidates.sort((a, b) => a.length - b.length)[0];
  return shortest.length;
}

module.exports = shortestSubstring;
