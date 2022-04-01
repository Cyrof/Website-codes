
import json

Profile = {'users': []}


def update_json(user, ps):
    tempdic = {'username': user, 'password': ps}
    Profile['users'].append(tempdic)
    # print(Profile)


def file_write():
    json_string = json.dumps(Profile)
    with open('python_scripts\\Profile.json', 'w+') as f:
        json.dump(json_string, f)
        f.close()
    # print("hi")

def get_data():
    with open('python_scripts\\Profile.json') as f:
        data = json.load(f)
        print(data)

