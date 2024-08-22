import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';
/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
    root: 'body',
    //autoShow: true,
    disablePageInteraction: tru,
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
    },

    onChange: ({ changedCategories, changedServices }) => {
        console.log('onChange fired!', changedCategories, changedServices);
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
            readOnly: true // this category cannot be
        },
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
        ads: {}
    },

    language: {
        default: 'de',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences',
                    // closeIconLabel: 'Reject all and close modal',
                    footer: `
                        <a href="#path-to-impressum.html" target="_blank">Impressum</a>
                        <a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
                    `
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    serviceCounterLabel: 'Service|Services',
                    sections: [
                        {
                            title: 'Your Privacy Choices',
                            description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`
                        },
                        {
                            title: 'Strictly Necessary',
                            description:
                                'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description:
                                'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
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
                            title: 'Targeting and Advertising',
                            description:
                                'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                            linkedCategory: 'ads'
                        },
                        {
                            title: 'More information',
                            description:
                                'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                        }
                    ]
                }
            },
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
                            description: `In diesem Bereich können Sie einige Präferenzen in Bezug auf die Verarbeitung Ihrer persönlichen Daten angeben. Sie können die von Ihnen getroffenen Entscheidungen jederzeit überprüfen und ändern, indem Sie dieses Feld über den angegebenen Link erneut aufrufen. Um Ihre Zustimmung zu den unten beschriebenen Verarbeitungsaktivitäten zu verweigern, schalten Sie die Kippschalter aus oder verwenden Sie die Schaltfläche „Alle ablehnen“ und bestätigen Sie, dass Sie Ihre Auswahl speichern möchten. Übersetzt mit DeepL.com (kostenlose Version)`
                        },
                        {
                            title: 'Unbedingt erforderlich',
                            description:
                                'Diese Cookies sind für die Funktion der Website unbedingt erforderlich und können nicht deaktiviert werden.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
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
});
