const express = require('express');
// const router = require('./routes/routes')
const app = express();
const port = 3030;

app.use(express.static('public'));
// app.use('/', router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

// Define a route for the home page
app.get('/', async (req, res) => {
    const { target, option } = req.query
    if(target || option){
        switch (option) {
            case 'dir-list':
                res.redirect(`https://www.google.com/search?q=site:${target} intitle:index.of`)
                break;
            case 'config-files':
                res.redirect(`https://www.google.com/search?q=site:${target} ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini`)
                break;
            case 'db-files':
                res.redirect(`https://www.google.com/search?q=site:${target} ext:sql | ext:dbf | ext:mdb`)
                break;
            case 'wp':
                res.redirect(`http://www.google.com/search?q=site:${target} inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download`)
                break;
            case 'log-files':
                res.redirect(`https://www.google.com/search?q=site:${target} ext:log`)
                break;
            case 'bak-files':
                res.redirect(`https://www.google.com/search?q=site:${target} ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup`)
                break;
            case 'login-pgs':
                res.redirect(`https://www.google.com/search?q=site:${target} inurl:login | inurl:signin | intitle:Login | intitle: signin | inurl:auth`)
                break;
            case 'sql-errs':
                res.redirect(`https://www.google.com/search?q=site:${target} intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"`)
                break;
            case 'apache-config':
                res.redirect(`https://www.google.com/search?q=site:${target} filetype:config "apache"`)
                break;
            case 'robots':
                res.redirect(`https://${target}/robots.txt`)
                break;
            case 'public-docs':
                res.redirect(`https://www.google.com/search?q=site:${target} ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv`)
                break;
            case 'php-info':
                res.redirect(`https://www.google.com/search?q=site:${target} ext:php intitle:phpinfo "published by the PHP Group"`)
                break;
            case 'bckdoors':
                res.redirect(`https://www.google.com/search?q=site:${target}  inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor`)
                break;
            case 'setup-files':
                res.redirect(`https://www.google.com/search?q=site:${target}  inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config`)
                break;
            case 'op-redir':
                res.redirect(`https://www.google.com/search?q=site:${target} inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http`)
                break;
            case 'apace-struts':
                res.redirect(`https://www.google.com/search?q=site:${target} ext:action | ext:struts | ext:do`)
                break;
            case '3rdprty':
                res.redirect(`https://www.google.com/search?q=site:http://ideone.com | site:http://codebeautify.org | site:http://codeshare.io | site:http://codepen.io | site:http://repl.it | site:http://justpaste.it | site:http://pastebin.com | site:http://jsfiddle.net | site:http://trello.com | site:*.atlassian.net | site:bitbucket.org "${target}"`)
                break;
            case 'git-lab':
                res.redirect(`https://www.google.com/search?q=inurl:gitlab ${target}`)
                break;
            case 'pastebin':
                res.redirect(`https://www.google.com/search?q=site:pastebin.com ${target}`)
                break;
            case 'linkedin':
                res.redirect(`https://www.google.com/search?q=site:linkedin.com employees ${target}`)
                break;
            case 'htaccess':
                res.redirect(`https://www.google.com/search?q=site:${target} inurl:"/phpinfo.php" | inurl:".htaccess"`)
                break;
            case 'fsub':
                res.redirect(`https://www.google.com/search?q=site:*.${target}`)
                break;
            case 'fsubsub':
                res.redirect(`https://www.google.com/search?q=site:*.*.${target}`)
                break;
            case 'wp2':
                res.redirect(`https://www.google.com/search?q=site:${target} inurl:wp-content | inurl:wp-includes`)
                break;
            case 'stackoverflow':
                res.redirect(`https://www.google.com/search?q=site:stackoverflow.com "${target}"`)
                break;
            case 'xdomain':
                res.redirect(`https://${target}/crossdomain.xml`)
                break;
            case 'git-fldr':
                res.redirect(`https://www.google.com/search?q=inurl:"/.git "${target} -github`)
                break;
            case 'digiocean':
                res.redirect(`https://www.google.com/search?q=site:digitaloceanspaces.com "${target}"`)
                break;
            case 'fswf-google':
                res.redirect(`https://www.google.com/search?q=inurl:${target} ext:swf`)
                break;
            case 'fswf-yandex':
                res.redirect(`https://yandex.com/search/?text=site:${target} mime:swf`)
                break;
            case 'traefik':
                res.redirect(`https://google.com/search?q=intitle:traefik inurl:8080/dashboard"${target}"`)
                break;
            case 's3-bckts':
                res.redirect(`https://google.com/search?q=site:.s3.amazonaws.com "${target}"`)
                break;
            case 'api-end':
                res.redirect(`https://google.com/search?q=site:${target} filetype:wsdl | filetype:WSDL | ext:svc | inurl:wsdl | Filetype: ?wsdl | inurl:asmx?wsdl | inurl:jws?wsdl | intitle:_vti_bin/sites.asmx?wsdl | inurl:_vti_bin/sites.asmx?wsdl`)
                break;
            case 'plntxt-psswd':
                res.redirect(`https://google.com/search?q=site:throwbin.io ${target}`)
                break;
            case 's-bitb-atl':
                res.redirect(`https://google.com/search?q=site:atlassian.net | site:bitbucket.org "${target}"`)
                break;
            case 'domaineye':
                res.redirect(`https://domaineye.com/similar/${target}`)
                break;
            case 'sec-heads':
                res.redirect(`https://securityheaders.com/?q=${target}&followRedirects=on`)
                break;
            case 'pssive-total':
                res.redirect(`https://community.riskiq.com/search/${target}`)
                break;
            case 'wp-wb':
                res.redirect(`http://wwwb-dedup.us.archive.org:8083/cdx/search?url=${target}/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx=`)
                break;
            case 's-git':
                res.redirect(`https://github.com/search?q=%22*.${target}%22`)
                break;
            case 'open-bb':
                res.redirect(`https://www.openbugbounty.org/search/?search=${target}`)
                break;
            case 'reddit':
                res.redirect(`https://www.reddit.com/search/?q=${target}`)
                break;
            case 'thrt-crwd':
                res.redirect(`https://threatcrowd.org/domain.php?domain=${target}`)
                break;
            case 'utube':
                res.redirect(`https://www.youtube.com/results?search_query=${target}`)
                break;
            case 's-swf':
                res.redirect(`https://web.archive.org/cdx/search?url=${target}/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000`)
                break;
            case 'wayback2':
                res.redirect(`https://web.archive.org/cdx/search?url=${target}/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=mimetype:application/x-shockwave-flash&limit=100000`)
                break;
            case 'wayback3':
                res.redirect(`https://web.archive.org/web/*/${target}/*`)
                break;
            case 'cms':
                res.redirect(`https://whatcms.org/?s=${target}`)
                break;
            case 'cld-bckts':
                res.redirect(`https://cse.google.com/cse?cx=002972716746423218710:veac6ui3rio#gsc.tab=0&gsc.q=${target}`)
                break;
            case 'srccode':
                res.redirect(`https://publicwww.com/websites/%22${target}%22/`)
                break;
            case 'censys-ip':
                res.redirect(`https://search.censys.io/ipv4?q=${target}`)
                break;
            case 'censys-domains':
                res.redirect(`https://search.censys.io/domain?q=${target}`)
                break;
            case 'censys-certs':
                res.redirect(`https://search.censys.io/certificates?q=${target}`)
                break;
            case 'shodan':
                res.redirect(`https://www.shodan.io/search?query=${target}`)
                break;
            case 'git-gist':
                res.redirect(`https://gist.github.com/search?q=*.%22${target}%22`)
                break;
            case 'crt-log':
                res.redirect(`https://crt.sh/?q=${target}`)
                break;
            case '':
                res.redirect(``)
                break;
            case 'admin':
                res.redirect('/')
                break;
            default:
                break;
        }
    }
    else{
        res.sendFile(__dirname + '/public/home.html')
    }
});

app.get('/about-us', (req, res) => {
    res.sendFile(__dirname + '/public/about-us.html')
})

app.use(function(req,res){
    res.status(404).sendFile(__dirname + '/public/404.html');
  });