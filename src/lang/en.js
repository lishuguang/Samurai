export default {
    sideBar:{
        main:'MENU',
        wallet:'Wallet',
        trade:'Transations',
        tradeInfor:'Transaction Information',
        contract:'Contracts',
        more:'More',
        setting:'Settings',
        enter:'Enter'
    },
    wallet:{
        Wallets:'Wallets',
        walletTitle:'WALLETS',
        individual:'Individual Wallet',
        shared:'Shared Wallet',
        totalBalance:'BALANCE',
        balance:'Balance',
        add:'Add Individual Wallet',
        createWallet:'Create Wallet',  // key由create改为createWallet
        importW:'Import Wallet',
        send:'Send',
        accept:'Receive',
        copyAddress:'Copy',
        more:'More',
        exportKeystore:'Export keystore',
        viewPrivate:'View private key',
        modifyPsw:'Change password',
        deleteWallet:'Delete wallet',
        modify:'Authentication',
        importTxt:'You are about to export the  keystore file',
        viewPrivateTxt:'You are about to view private key',
        modifyPswTxt:'You are about to change password',
        deleteTxt:'You are about to delete wallet',
        walletAddress:'Wallet address',
        walletAddress0x:"Wallet address 0x0000000...",  // add
        enterPsw:'Wallet password',
        walletpubKey:'Public Key',  // add
        walletPrivate:'Private key',
        enterOldPsw:'Old wallet password',
        enterNewPsw:'Set wallet password(at least 6 characters)',  // 原value为New wallet password(No less than 6 digits)
        enterNewPswHint:'at least 6 characters',
        repeatPsw:'Repeat new password',
        warning:'Warning',
        warningTxt:'You are on the PlatON Test Network. Be careful not to transfer real funds to this address.',
        warningContTxt:'You are on the PlatON Test Network. Be careful not to transfer real funds to this address.',
        copySuccess:'Copied to clipboard',
        copyFail:'Copy content failed',
        cannotTrans:'Insufficient balance, unable to pay transaction fees',
        cannotTrans2:'Insufficient balance！',
        deleteSuccess:'Delete wallet successfully',
        pswError:'Password error！',
        modifyPswSuccess:'Change password successfully',
        oldPswError:'Old password error！',
        // author hufu 2018-11-12
        individualWalletName:'Name of Individual Wallet',
        pleaseRememberPassword:'Please remember your wallet password. The server will not store your password!',
        createIndividualWallet:'create Individual Wallet',
        createSharedWallet:'Create Shared Wallet',
        AddSharedWallet:'Add Shared Wallet',
        importIndividualWallet:'Import Individual Wallet',
        IndividualWalletSuccess:'Create Individual Wallet  Successfully',
        name:'Label ',
        address:'Address ',
        pubKey:'Pubilc Key ',
        signature:'Signature Scheme ',
        prikey:'Private Key ',
        tipSaveJson:'Please make a backup of these data and save the .json file',
        downloadJson:'Download.json',
        finish:'OK',
        hex:'Private key(64 Hex)',
        mnemonicPhrase:'Mnemonic phrase',
        walletName:'Name of Individual Wallet',
        inputPKHint:'Please enter private key with 64byte hex format',
        import:'Import',
        browse:'Browse',
        unselectedFile:'Please select a file',
        decryptKeystore:'Password to decrypt keystore(.json)',
        inputPhraseHint:'Please enter a wallet mnemonic phrase and use a space to separate each of eth words',
        QRCode:'Wallet QR Code',
        // 错误提示
        walletNameRequired:'The wallet label is required',
        walletPswRequired:'The wallet password is required',
        PKRequired:'The private key is required',
        NodePKRequired:'Node private key is required',
        NodePKillegal:'Node private key is illegal',
        NodeIPRequired:'Node IP is required',
        NodeIPillegal:'Node IP is illegal',
        NodePortRequired:'Node port is required',
        NodePortillegal:'Node port is illegal',
        PKlength:'The private key length must be 64',
        PhraseRequired:'The Mnemonic phrase is required',
        fileRequired:'The keystore file is required',
        netNameEmpty:'The network name is required',
        netNameRepeat:'The network name cannot be repeated',
        netNameIllegal:'The network name is illegal',
        blockSpacingEmpty:'Block spacing cannot be empty',
        blockSpacingIllegal:'The Block spacing is illegal',
        repeatPswP:'Please repeat your wallet password',
        pswNoMatch:'Inconsistent entry password!',
        initFailed:'Initialization or node startup failed',
        paramsEmpty:'The parameter cannot be empty',
        notUploadAgain:'Do not upload again',
        wasmFormat:'Upload files only in wasm format!',
        estimateFailed:'Failed to estimate gas value',
        selectHint:'please select',
        defaultNoData:'no data',
        //发送
        sendFunds:'Send Funds',
        from:'FROM',
        to:'TO',
        amountSend:'AMOUNT',
        amountHint:'Send amount',
        wantTo:'you want to send',
        selectFee:'SELECT FEE',
        cheaper:'Cheaper',
        faster:'Faster',
        estimatedTime:'Estimated transaction confirmation time',
        advance:'ADVANCED OPTIONS',
        advanceHint:'You can add extra data to send along with your transaction. If you don \'t know what this is then don \'t touch it or bad things may happen.',
        total:'TOTAL',
        sendTransaction:'send Transaction',
        amount:'Amount',
        fee:'Fee',
        input:'',
        walletPsw:'Wallet password',
        allWallet:'All Wallet',
        createShareWallet:'Create Wallet',
        addShareWallet:'Import Wallet',
        tip1:'All Individual Wallet balance are 0, unable to pay transaction fees！',
        tip2:'Create Individual Wallet first ,and Transfer to assets',
        incorrectAddress:'Invalid Receive address',
        insufficientBalance:'Insufficient balance',
        incorrectValue:'Invalid value',
        transactionFailed:'Transaction failed!',
        invalidSignatures:'Personal signatures are unavailable or wallets do not exist',
        invalidPrivatekey:'Import failed! Invalid Private Key',
        invalidWord:'Import failed! Invaild Mnemonic phrase',
        invalidFile:'Import failed! The file cannot be parsed',
        alreadyExits:'Individual Wallet  already exists',
        importSuccess:'Import Individual Wallet Successfully',
        importFail:'Import Individual Wallet failed',
        viewAbi:'View Interface',
        sharedOwners:'Shared Owners',
        walletOwner:'Wallet Owner',
        interfaceCode:'Interface Code',
        sharedWalletName:'Name of Shared Wallet',
        enterSharedAddr:'Shared Wallet Address',
        addShare:'Add',
        nonSharedName:'The shared wallet label is required',
        nonSharedAddr:'The shared wallet address is required',
        inVaildSharedAddr:'Invalid Shared Wallet address',
        addShareFail:'Invalid Shared Wallet address',
        shareAlreadyExits:'Shared Wallet  already exists',
        addShareSuccess:'Add Shared Wallet Successfully',
        requiredNum:'Required Signatures',
        deployContract:'Create Contract',
        newShareTip1:'The owner name and Individual Wallet address is required',
        newShareTip2:'The owner name is required',
        newShareTip3:'Individual Wallet address is required',
        addrExits:'Same Individual Wallet address',
        createShareSuccess:'Transaction sent!',
        createShareFail:'Transaction failed to send!',
        sendToSelf:'Can`t send to itself',
        isShareAddress:'Cannot enter shared wallet address'
    },
    nodeSync:{
        syncStatus:'SYNC STATUS',
        Peers:'Connected nodes',
        Blocks:'Unsynced blocks',
    },
    trade:{
        record:'Transactions',
        pendingTrade:'Pending Transactions',
        noRecord:'No transactions yet',
        loadMore:'Show More...',
        // author hufu 2018-11-13
        sent:'Sent',
        contractCreation:'Contract creation',
        contractCreation2:'Create contract',
        contractExecution:'Contract execution',
        mpc:'Mpc',
        finished:'Completed',
        failed:'Failed',
        pending:'Pending',
        confirm:'Confirm',
        reject:'Reject',
        transactionInfo:'Transaction Information',
        type:'Type',
        tradeTime:'TimeStamp',
        tradeHash:'TxHash',
        tradeStatus:'TxReceipt Status',
        sum:'Value',
        from:'From',
        to:'To',
        fee:'Actual Tx Cost/Fee',
        gas:'Gas Used By Transaction',
        energon:'Energon Price',
        block:'Block Height',
        TXD:'Input Data',
        allTypes:'All Types',
        others:'Others',
        noData:'no data'
    },
    settings:{
        network:'Network',
        mainNet:'PlatON MainNet',
        testNet:'PlatON TestNet',
        priNet:'PlatON Private-Net',
        networkConfig:'Network Configuration',
        joiningNet:'JOINING NETWORK',
        netSet:'The network is successfully set to the ',
        networkSet:' network',
        stratNet:'Strat a private network',
        failure:'failure',
        fail:'Fail',
        mainTitle:'Join the PlatON Mainnet',
        mainContent:'For common users to enter.Mainnet is the production network,that carry real PlatON transactions',
        testTitle:'Join the PlatON Testnet',
        testContent:'For developer to enter.Testnet is an alternative PlatON blockchain,and to be used to testing',
        priTitle:'Create the PlatON Private-net',
        priContent:'Create a local private network for developers to learn, and test functions.',
        lang:'Language',
        en:'English',
        zh:'Chinese',
        filePath:'Save keystore file path',
        path:'Path',
        change:'Change',
        about:'About',
        system:'System',
        check:'Check for Updates',
        applyTest:'PlatON TestNet，Testing ATP Application',
        apply:'Apply',
        community:'Community',
        customNet:{
            createNet:'Create Private Network',
            block:'Genesis Block',
            netName:'Network Name',
            netNameHint:'Only letters and numbers are supported',
            consensus:'Consensus',
            interval:'Block interval',
            cancel:'Cancel',
            create:'Create Genesis Block',
            creating:'Creating',
            createWallet:'Creat Wallet',
            walletName:'Wallet Name',
            password:'Password',
            rePassword:'Repeat Password',
            createAndWrite:'Create Wallet',
            address:'Address',
            tip:'Please make a backup of wallet .json file',
            download:'Download.json',
            nodeaddress:'Node Address',
            node:'Node',
            priK:'Private Key',
            pubK:'Public Key',
            IP:'IP',
            port:'Port',
            addNode:'Add Node',
            startNode:'Init and Start Node',
            successfully:'created successfully',
            folder:'Data Folder',
            forOther:'For other nodes join the private chain, please export the static node file',
            export:'Export',
            // 加入PlatON私有网络
            addNet:'Add Private Network',
            importFiles:'Import static node files',
            importFilesHint:'Import the created private chain static node file(static_nodes.json)',
            next:'Next',
            filesReq:'Static node files is required',
            cannotResolved:'Node information cannot be resolved',
            nodeAddress:'Node Address:',
            nodePK:'Node Private Key:',
            nodeIP:'Node IP:',
            nodePort:'Node Port:',
            addNode:'Add and Start Node',
        }
    },
    form:{
        nonPsw:'Password is required',
        create:'Create',
        cancel:'Cancel',
        submit:'Submit', // add
        sure:'Ok',
        nonOldPsw:'The old password is required',
        less6:'The password must be at least 6 characters',
        nonRepPsw:'The new password comfirmation is required',
        disMatch:'Please match the repeat password',
        wrongPsw:'Password error',
        next:'Next',
        back:'Back'
    },
    contracts:{
        contracts:'Contracts',
        contractsInfor:'Contract Information',
        addCont:'Add Contract',
        deployCont:'Deploy Contract',
        watchCont:'Watch Contract',
        from:'FROM',
        fromHint:' ',
        amount:'AMOUNT',
        amountHint:'Send amount 0.00',
        wantSend:'You want to send',
        contByte:'Contract Bytecode',
        contByteEmpty:'Contract Bytecode is required',
        contNameEmpty:'Contract name is required',
        import:'Import',
        drag:'drag bytecode file',
        contABI:'Contract ABI(Interface)',
        contABIEmpty:'Contract ABI is required',
        contABIHint:'Compile output ABI(Interface)',
        contABIinvalid:'Contract ABI invalid',
        selectFee:'SELECT FEE',
        within:'probably within ',
        second:'s',
        withinmins:'mins',
        within30s:'小于30s',
        within5mins:'小于5分钟',
        within15mins:'小于15分钟',
        total:'TOTAL',
        deploy:'DEPLOY',
        contractInfo:'CONTRACT INFO',
        copy:'Copy',
        interface:'Interface',
        executeCont:'EXECUTE CONTRACT',
        executeContCap:'Execute Contract',
        selectFunc:'select a function',
        executeFrom:'Execute from',
        execute:'EXECUTE',
        walletEmpty:'Create Individual Wallet first ,and Transfer to assets',
        balanceEmpty:'All Individual Wallet balance are 0, unable to pay transaction fees！',
        inputFormat:'The format of sending quantity input is wrong, please input again',
        deployFail:'Create Contract Failed',
        createCont:{
            creatCont:'Creat Contract',
            amount:'Amount',
            fee:'Fee',
            advanceOpt:'ADVANCED OPTIONS',
            inputHint:'Please enter wallet password',
            cancel:'Cancel',
            submit:'Submit'
        },
        watchContract:{
            contName:'CONTRACT NAME',
            nameHint:'Please enter the contract name',
            contAddress:'CONTRACT ADDRESS',
            contAddressEmp:'The contract address is is required',
            contAddressExist:'Contract address already exists',
            contAddressInvalid:'Failed to add! The contract address does not exist',
            contAddressError:'Vaild contract address',
            addressHint:'Please enter the contract address',
            contABI:'CONTRACT ABI(Interface)',
            contABIEmp:'The contract ABI(Interface) is is required',
            contABIInvalid:'The contract interface cannot be resolved',
            cancel:'Cancel',
            add:'Add'
        }
    }
};