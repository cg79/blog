text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
Explanation:

^\w : first character of the string
| : or
\s\w : first character after whitespace
(^\w|\s\w) Capture the pattern.
g Flag: Match all occurrences.
If you want to make sure the rest is in lowercase:

text.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())