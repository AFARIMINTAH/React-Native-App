import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.campuslink',
    projectId: '6660662400307883272b',
    databaseId: '666069e900305414fd45',
    userCollectionId: '66606a1b001520b7c52c',
    videoCollectionId: '66606a7a0027ef66801a',
    storageId: '66606c76000f5b95eaa4',
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId)
    .setPlatform(config.platform) 

    const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

}



;