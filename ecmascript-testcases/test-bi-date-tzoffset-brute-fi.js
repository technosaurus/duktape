/*
 *  Brute force tzoffset test for Finnish locale.
 *
 *  Right now (2014-08-09) the only discrepancy to V8 is the year 1970.
 *  That discrepancy is caused by Duktape using an equivalent year for
 *  the year 1970.  If that behavior is removed, the test should pass
 *  with no diff.
 */

/*===
finnish tzoffset/dst brute force test
1900 -> 1993:-120 5208:-180 1559:-120
1901 -> 2137:-120 5040:-180 1583:-120
1902 -> 2113:-120 5040:-180 1607:-120
1903 -> 2089:-120 5040:-180 1631:-120
1904 -> 2065:-120 5208:-180 1511:-120
1905 -> 2017:-120 5208:-180 1535:-120
1906 -> 1993:-120 5208:-180 1559:-120
1907 -> 2137:-120 5040:-180 1583:-120
1908 -> 2113:-120 5040:-180 1631:-120
1909 -> 2065:-120 5208:-180 1487:-120
1910 -> 2041:-120 5208:-180 1511:-120
1911 -> 2017:-120 5208:-180 1535:-120
1912 -> 2161:-120 5040:-180 1583:-120
1913 -> 2113:-120 5040:-180 1607:-120
1914 -> 2089:-120 5040:-180 1631:-120
1915 -> 2065:-120 5208:-180 1487:-120
1916 -> 2041:-120 5208:-180 1535:-120
1917 -> 1993:-120 5208:-180 1559:-120
1918 -> 2137:-120 5040:-180 1583:-120
1919 -> 2113:-120 5040:-180 1607:-120
1920 -> 2089:-120 5208:-180 1487:-120
1921 -> 2041:-120 5208:-180 1511:-120
1922 -> 2017:-120 5208:-180 1535:-120
1923 -> 1993:-120 5208:-180 1559:-120
1924 -> 2137:-120 5040:-180 1607:-120
1925 -> 2089:-120 5040:-180 1631:-120
1926 -> 2065:-120 5208:-180 1487:-120
1927 -> 2041:-120 5208:-180 1511:-120
1928 -> 2017:-120 5208:-180 1559:-120
1929 -> 2137:-120 5040:-180 1583:-120
1930 -> 2113:-120 5040:-180 1607:-120
1931 -> 2089:-120 5040:-180 1631:-120
1932 -> 2065:-120 5208:-180 1511:-120
1933 -> 2017:-120 5208:-180 1535:-120
1934 -> 1993:-120 5208:-180 1559:-120
1935 -> 2137:-120 5040:-180 1583:-120
1936 -> 2113:-120 5040:-180 1631:-120
1937 -> 2065:-120 5208:-180 1487:-120
1938 -> 2041:-120 5208:-180 1511:-120
1939 -> 2017:-120 5208:-180 1535:-120
1940 -> 2161:-120 5040:-180 1583:-120
1941 -> 2113:-120 5040:-180 1607:-120
1942 -> 2089:-120 5040:-180 1631:-120
1943 -> 2065:-120 5208:-180 1487:-120
1944 -> 2041:-120 5208:-180 1535:-120
1945 -> 1993:-120 5208:-180 1559:-120
1946 -> 2137:-120 5040:-180 1583:-120
1947 -> 2113:-120 5040:-180 1607:-120
1948 -> 2089:-120 5208:-180 1487:-120
1949 -> 2041:-120 5208:-180 1511:-120
1950 -> 2017:-120 5208:-180 1535:-120
1951 -> 1993:-120 5208:-180 1559:-120
1952 -> 2137:-120 5040:-180 1607:-120
1953 -> 2089:-120 5040:-180 1631:-120
1954 -> 2065:-120 5208:-180 1487:-120
1955 -> 2041:-120 5208:-180 1511:-120
1956 -> 2017:-120 5208:-180 1559:-120
1957 -> 2137:-120 5040:-180 1583:-120
1958 -> 2113:-120 5040:-180 1607:-120
1959 -> 2089:-120 5040:-180 1631:-120
1960 -> 2065:-120 5208:-180 1511:-120
1961 -> 2017:-120 5208:-180 1535:-120
1962 -> 1993:-120 5208:-180 1559:-120
1963 -> 2137:-120 5040:-180 1583:-120
1964 -> 2113:-120 5040:-180 1631:-120
1965 -> 2065:-120 5208:-180 1487:-120
1966 -> 2041:-120 5208:-180 1511:-120
1967 -> 2017:-120 5208:-180 1535:-120
1968 -> 2161:-120 5040:-180 1583:-120
1969 -> 2113:-120 5040:-180 1607:-120
1970 -> 8760:-120
1971 -> 8760:-120
1972 -> 8784:-120
1973 -> 8760:-120
1974 -> 8760:-120
1975 -> 8760:-120
1976 -> 8784:-120
1977 -> 8760:-120
1978 -> 8760:-120
1979 -> 8760:-120
1980 -> 8784:-120
1981 -> 2088:-120 4368:-180 2304:-120
1982 -> 2064:-120 4368:-180 2328:-120
1983 -> 2041:-120 4368:-180 2351:-120
1984 -> 2017:-120 4536:-180 2231:-120
1985 -> 2137:-120 4368:-180 2255:-120
1986 -> 2113:-120 4368:-180 2279:-120
1987 -> 2089:-120 4368:-180 2303:-120
1988 -> 2065:-120 4368:-180 2351:-120
1989 -> 2017:-120 4368:-180 2375:-120
1990 -> 1993:-120 4536:-180 2231:-120
1991 -> 2137:-120 4368:-180 2255:-120
1992 -> 2113:-120 4368:-180 2303:-120
1993 -> 2065:-120 4368:-180 2327:-120
1994 -> 2041:-120 4368:-180 2351:-120
1995 -> 2017:-120 4368:-180 2375:-120
1996 -> 2161:-120 5040:-180 1583:-120
1997 -> 2113:-120 5040:-180 1607:-120
1998 -> 2089:-120 5040:-180 1631:-120
1999 -> 2065:-120 5208:-180 1487:-120
2000 -> 2041:-120 5208:-180 1535:-120
2001 -> 1993:-120 5208:-180 1559:-120
2002 -> 2137:-120 5040:-180 1583:-120
2003 -> 2113:-120 5040:-180 1607:-120
2004 -> 2089:-120 5208:-180 1487:-120
2005 -> 2041:-120 5208:-180 1511:-120
2006 -> 2017:-120 5208:-180 1535:-120
2007 -> 1993:-120 5208:-180 1559:-120
2008 -> 2137:-120 5040:-180 1607:-120
2009 -> 2089:-120 5040:-180 1631:-120
2010 -> 2065:-120 5208:-180 1487:-120
2011 -> 2041:-120 5208:-180 1511:-120
2012 -> 2017:-120 5208:-180 1559:-120
2013 -> 2137:-120 5040:-180 1583:-120
2014 -> 2113:-120 5040:-180 1607:-120
2015 -> 2089:-120 5040:-180 1631:-120
2016 -> 2065:-120 5208:-180 1511:-120
2017 -> 2017:-120 5208:-180 1535:-120
2018 -> 1993:-120 5208:-180 1559:-120
2019 -> 2137:-120 5040:-180 1583:-120
2020 -> 2113:-120 5040:-180 1631:-120
2021 -> 2065:-120 5208:-180 1487:-120
2022 -> 2041:-120 5208:-180 1511:-120
2023 -> 2017:-120 5208:-180 1535:-120
2024 -> 2161:-120 5040:-180 1583:-120
2025 -> 2113:-120 5040:-180 1607:-120
2026 -> 2089:-120 5040:-180 1631:-120
2027 -> 2065:-120 5208:-180 1487:-120
2028 -> 2041:-120 5208:-180 1535:-120
2029 -> 1993:-120 5208:-180 1559:-120
2030 -> 2137:-120 5040:-180 1583:-120
2031 -> 2113:-120 5040:-180 1607:-120
2032 -> 2089:-120 5208:-180 1487:-120
2033 -> 2041:-120 5208:-180 1511:-120
2034 -> 2017:-120 5208:-180 1535:-120
2035 -> 1993:-120 5208:-180 1559:-120
2036 -> 2137:-120 5040:-180 1607:-120
2037 -> 2089:-120 5040:-180 1631:-120
2038 -> 2065:-120 5208:-180 1487:-120
2039 -> 2041:-120 5208:-180 1511:-120
2040 -> 2017:-120 5208:-180 1559:-120
2041 -> 2137:-120 5040:-180 1583:-120
2042 -> 2113:-120 5040:-180 1607:-120
2043 -> 2089:-120 5040:-180 1631:-120
2044 -> 2065:-120 5208:-180 1511:-120
2045 -> 2017:-120 5208:-180 1535:-120
2046 -> 1993:-120 5208:-180 1559:-120
2047 -> 2137:-120 5040:-180 1583:-120
2048 -> 2113:-120 5040:-180 1631:-120
2049 -> 2065:-120 5208:-180 1487:-120
2050 -> 2041:-120 5208:-180 1511:-120
2051 -> 2017:-120 5208:-180 1535:-120
2052 -> 2161:-120 5040:-180 1583:-120
2053 -> 2113:-120 5040:-180 1607:-120
2054 -> 2089:-120 5040:-180 1631:-120
2055 -> 2065:-120 5208:-180 1487:-120
2056 -> 2041:-120 5208:-180 1535:-120
2057 -> 1993:-120 5208:-180 1559:-120
2058 -> 2137:-120 5040:-180 1583:-120
2059 -> 2113:-120 5040:-180 1607:-120
2060 -> 2089:-120 5208:-180 1487:-120
2061 -> 2041:-120 5208:-180 1511:-120
2062 -> 2017:-120 5208:-180 1535:-120
2063 -> 1993:-120 5208:-180 1559:-120
2064 -> 2137:-120 5040:-180 1607:-120
2065 -> 2089:-120 5040:-180 1631:-120
2066 -> 2065:-120 5208:-180 1487:-120
2067 -> 2041:-120 5208:-180 1511:-120
2068 -> 2017:-120 5208:-180 1559:-120
2069 -> 2137:-120 5040:-180 1583:-120
2070 -> 2113:-120 5040:-180 1607:-120
2071 -> 2089:-120 5040:-180 1631:-120
2072 -> 2065:-120 5208:-180 1511:-120
2073 -> 2017:-120 5208:-180 1535:-120
2074 -> 1993:-120 5208:-180 1559:-120
2075 -> 2137:-120 5040:-180 1583:-120
2076 -> 2113:-120 5040:-180 1631:-120
2077 -> 2065:-120 5208:-180 1487:-120
2078 -> 2041:-120 5208:-180 1511:-120
2079 -> 2017:-120 5208:-180 1535:-120
2080 -> 2161:-120 5040:-180 1583:-120
2081 -> 2113:-120 5040:-180 1607:-120
2082 -> 2089:-120 5040:-180 1631:-120
2083 -> 2065:-120 5208:-180 1487:-120
2084 -> 2041:-120 5208:-180 1535:-120
2085 -> 1993:-120 5208:-180 1559:-120
2086 -> 2137:-120 5040:-180 1583:-120
2087 -> 2113:-120 5040:-180 1607:-120
2088 -> 2089:-120 5208:-180 1487:-120
2089 -> 2041:-120 5208:-180 1511:-120
2090 -> 2017:-120 5208:-180 1535:-120
2091 -> 1993:-120 5208:-180 1559:-120
2092 -> 2137:-120 5040:-180 1607:-120
2093 -> 2089:-120 5040:-180 1631:-120
2094 -> 2065:-120 5208:-180 1487:-120
2095 -> 2041:-120 5208:-180 1511:-120
2096 -> 2017:-120 5208:-180 1559:-120
2097 -> 2137:-120 5040:-180 1583:-120
2098 -> 2113:-120 5040:-180 1607:-120
2099 -> 2089:-120 5040:-180 1631:-120
2100 -> 2065:-120 5208:-180 1487:-120
===*/

function summarizeOffsets(offsets) {
    var res = [];
    var i, n;
    var curroff, currlen;

    for (i = 0, n = offsets.length; i < n; i++) {
        if (curroff !== offsets[i]) {
            if (currlen > 0) {
                res.push(currlen + ':' + curroff);
            }
            curroff = offsets[i];
            currlen = 1;
        } else {
            currlen++;
        }
    }
    if (currlen > 0) {
        res.push(currlen + ':' + curroff);
    }
    return res.join(' ');
}

function finnishTzoffsetTest() {
    var offsets;
    var timeval_start, timeval_end, timeval, timeval_step;
    var year_start, year_curr;
    var d;

    // Start from Jan 1, 1900, 00:00:00 UTC
    timeval_start = -2208988800000;

    // End at Jan 1, 2101, 00:00:00 UTC
    timeval_end = 4133980800000;

    // 60 minute steps
    timeval_step = 60 * 60 * 1000;

    timeval = timeval_start;
    while (timeval < timeval_end) {
        year_start = new Date(timeval).getUTCFullYear();
        offsets = [];
        while (true) {
            d = new Date(timeval);
            year_curr = d.getUTCFullYear();
            if (year_curr != year_start) {
                break;
            }
            offsets.push(d.getTimezoneOffset());
            timeval += timeval_step;
        }
        print(year_start + ' -> ' + summarizeOffsets(offsets));
    }
}

print('finnish tzoffset/dst brute force test');

try {
    finnishTzoffsetTest();
} catch (e) {
    print(e);
}
