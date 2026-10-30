#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
    char **args = malloc((argc + 2) * sizeof(char *));

    if (!args) {
        perror("malloc");
        return 1;
    }

    args[0] = "node";
    args[1] = "/opt/strm/strm.js";

    for (int i = 1; i < argc; i++) {
        args[i + 1] = argv[i];
    }

    args[argc + 1] = NULL;

    execvp("node", args);

    perror("execvp");
    free(args);
    return 1;
}
