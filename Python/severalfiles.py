## creating a program that opens several files
import codecs

def count_words(file):
    try:
        with codecs.open(file, 'r', encoding='utf-8') as f:
            contents = f.read()
    except IOError:
        print("Sorry, the file '{}' does not exist".format(file))
    except Exception as e:
        print("An error occurred:", e)
    else:
        words = contents.split()
        num_words = len(words)
        print("The file '{}' has about {} words.".format(file, num_words))

