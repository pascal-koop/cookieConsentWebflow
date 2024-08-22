import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';
/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
    root: 'body',
    autoShow: true,
    disablePageInteraction: true,
    // hideFromBots: true,
    mode: 'opt-in',
    // revision: 0,

    cookie: {
        name: 'cc_cookie',
        domain: location.hostname,
        path: '/',
        sameSite: 'Lax',
        expiresAfterDays: 365
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
        consentModal: {
            layout: 'cloud inline',
            position: 'bottom center',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    onFirstConsent: ({ cookie }) => {
        console.log('onFirstConsent fired', cookie);
    },

    onConsent: ({ cookie }) => {
        console.log('onConsent fired!', cookie);
        location.reload();
    },

    onChange: ({ changedCategories, changedServices }) => {
        console.log('onChange fired!', changedCategories, changedServices);
        location.reload();
    },

    onModalReady: ({ modalName }) => {
        console.log('ready:', modalName);
    },

    onModalShow: ({ modalName }) => {
        console.log('visible:', modalName);
    },

    onModalHide: ({ modalName }) => {
        console.log('hidden:', modalName);
    },

    categories: {
        necessary: {
            enabled: true, // this category is enabled by default
            readOnly: true, // this category cannot be

            analytics: {
                autoClear: {
                    cookies: [
                        {
                            name: /^_ga/ // regex: match all cookies starting with '_ga'
                        },
                        {
                            name: '_gid' // string: exact cookie name
                        }
                    ]
                },

                // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
                services: {
                    ga: {
                        label: 'Google Analytics 4',
                        onAccept: () => {
                            console.log('ga accepted');
                        },
                        onReject: () => {
                            console.log('ga rejected');
                        }
                    }
                }
            },
            ads: {},
            otherServices: {
                ga: {
                    label: 'Google Fonts',
                    onAccept: () => {
                        console.log('fonts accepted');
                    }
                }
            }
        },

        language: {
            default: 'de',
            translations: {
                de: {
                    consentModal: {
                        title: 'Wir verwenden Cookies auf unserer Website',
                        description:
                            'Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.',
                        acceptAllBtn: 'Alle akzeptieren',
                        acceptNecessaryBtn: 'Alle ablehnen',
                        showPreferencesBtn: 'Individuelle Einstellungen',
                        closeIconLabel: 'Alle ablehnen und schließen',
                        footer: `
                        <a href="#path-to-impressum.html" target="_blank">Impressum</a>
                        <a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
                    `
                    },
                    preferencesModal: {
                        title: 'Verwalten Sie Ihre Cookie-Einstellungen',
                        acceptAllBtn: 'Alle akzeptieren',
                        acceptNecessaryBtn: 'Alle ablehnen',
                        savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
                        closeIconLabel: 'Modal schließen',
                        serviceCounterLabel: 'Service|Services',
                        sections: [
                            {
                                title: 'Ihre Datenschutzeinstellungen',
                                description: `In diesem Bereich können Sie einige Präferenzen in Bezug auf die Verarbeitung Ihrer persönlichen Daten angeben. Sie können die von Ihnen getroffenen Entscheidungen jederzeit überprüfen und ändern, indem Sie dieses Feld über den angegebenen Link erneut aufrufen. Um Ihre Zustimmung zu den unten beschriebenen Verarbeitungsaktivitäten zu verweigern, schalten Sie die Kippschalter aus oder verwenden Sie die Schaltfläche „Alle ablehnen“ und bestätigen Sie, dass Sie Ihre Auswahl speichern möchten.`
                            },
                            {
                                title: 'Unbedingt erforderlich',
                                description:
                                    'Diese Cookies sind für die Funktion der Website unbedingt erforderlich und können nicht deaktiviert werden.',

                                //this field will generate a toggle linked to the 'necessary' category
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Funktionell',
                                description:
                                    'Diese Cookies Sammeln keine Bestimmten Daten können aber von Google Analytics erfasst werden',
                                linkedCategory: 'otherServices'
                            },
                            {
                                title: 'Performance und Analyse',
                                description:
                                    'Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten sind anonymisiert und können nicht dazu verwendet werden, Sie zu identifizieren.',
                                linkedCategory: 'analytics',
                                cookieTable: {
                                    caption: 'Cookie Tabelle',
                                    headers: {
                                        name: 'Cookie',
                                        domain: 'Domain',
                                        desc: 'Description'
                                    },
                                    body: [
                                        {
                                            name: '_ga',
                                            domain: location.hostname,
                                            desc: 'Description 1'
                                        }
                                    ]
                                }
                            },
                            {
                                title: 'Zielgruppen- und Werbe-Cookies',
                                description:
                                    'Diese Cookies werden verwendet, um Werbebotschaften besser auf Sie und Ihre Interessen abzustimmen. Ziel ist es, Anzeigen zu schalten, die für den einzelnen Nutzer relevant und ansprechend sind und somit für die Herausgeber und Drittanbieter wertvoller sind.',
                                linkedCategory: 'ads'
                            },
                            {
                                title: 'Mehr Informationen',
                                description:
                                    'Für alle Anfragen im Zusammenhang mit meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte an uns <a href="mailto:Hierkommtdiemailhin.com">Kontakt</a>'
                            }
                        ]
                    }
                }
            }
        }
    }
});
