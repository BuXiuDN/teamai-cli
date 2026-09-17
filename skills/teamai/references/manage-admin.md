# Scenario: Admin — day-to-day management

The user already ran `teamai init`. Do NOT re-init or re-register. Before changing
anything, say what you are about to change. Pick the task below that matches.

## Publish a new skill / rule / doc

The user (or you) edits a skill or rule locally, then publishes it to the team:

```bash
teamai push            # review the diff, then confirm
teamai push --all      # push everything without per-item confirmation
teamai push --skill <path>   # push one specific skill
```

Members receive it automatically the next time they open a session (or when they
run `teamai pull`).

## Invite a member

There is **no CLI invite flag.** Inviting is done on the Git platform's website:

1. On the platform (GitHub / GitLab / CNB), add the person to the team repo
   (Settings → Collaborators / Members).
2. Send them the **full repo URL** and this line to paste into their AI tool:
   `/teamai Help me join my team's TeamAI, repo URL is <URL>`

(If you want to see who is already registered: `teamai members` /
`teamai members list`.)

## See members and resources

```bash
teamai members list          # registered team members
teamai list                  # all resource types
teamai list skills           # just skills
teamai status                # local vs team differences
```

## Roles (skill namespaces per job function)

```bash
teamai roles list            # roles defined + your current role
teamai roles init            # create the roles manifest (admin, interactive)
teamai roles add <id>        # add a role
teamai roles update <id>     # change a role's namespaces / description
teamai roles remove <id>     # remove a role
```

After editing roles, `teamai push` to publish the manifest. Members re-sync on
their next session.

## Team packages (npm + Claude plugins)

Declare packages once; members get a prompt to install them (TeamAI never runs
third-party package code automatically):

```bash
teamai packages install typescript          # npm dependency
teamai packages install eslint@latest --global   # global CLI tool
teamai packages install code-review@claude-plugins-official   # Claude plugin
teamai push                                 # share the updated teamai.yaml
```

## Shared environment variables

```bash
teamai env list              # list (values masked)
teamai env list --reveal     # show values in plaintext
teamai env add <KEY> <VALUE> # add or update
teamai env remove <KEY>      # remove
```

## When sync fails

Run `teamai doctor` first. If it reports hook or path problems, load
`troubleshooting.md`. Have the affected member reopen their session; if their tool
has no session-start hook, they run `teamai pull` manually.

## Capture a lesson learned

Turn a tricky fix into team knowledge — see `contribute-member.md` (works for
admins too):

```bash
teamai contribute --file <path> --title "<title>"
```

## Don't

- Don't hand-run raw `git` commands.
- Don't create a second team repo.
- Don't use `owner/repo` short form — always the full URL.
