@echo off

VER
HELP
REM /?

:: Comment
REM Comment

:: %PATH% - environment variable

echo %PATH%
echo First argument: %1
echo Command-line arguments: %*

echo File with no enclosing quotation marks: %~7
echo Full file: %~f7
echo Drive letter: %~d7
echo Drive-less path: %~p7
echo Only name (no ext): %~n7
echo Ext: %~x7
echo Short name: %~s7
echo File attr: %~a7
echo File date: %~t7
echo File size: %~z7
echo File P+N: %~pn7
echo First match in PATH (or empty): %~$PATH:1
echo Self file: %~nx0

echo Current dir: %CD%
echo System time: %TIME%
echo Date: %DATE%
echo Random (0-32767): %RANDOM%

echo Error level returned by the last executed command or script: %ERRORLEVEL%
echo Command Processor Extensions version: %CMDEXTVERSION%
echo Command line was used to start current cmd.exe %CMDCMDLINE%

echo "Hello & world"
:: ^ - for escape
echo Hello ^& world
echo Hello ^^ world
:: We need ^^^ for escape after | (pipe)
echo Hello | echo X ^^^^ Y

:: ^ - for escape new line
echo Multi^
line echo

:: ^ - don't escape spaces. Use "...". No: some^ file.txt
attrib "some file.txt"

echo Percents: 50%%

:: Needs two %
set /a modulo=5%%3
echo Modulo 5%%3: %modulo%

for %%i in (1, 2, 3) do echo %%i

:: Literally %PATH%
echo %%PATH%%
:: Same but from command line:
:: echo ^%PATH^%

:: FINDSRT uses "\" as escape

:: Pipes
dir | more

:: & - Do everything always in a row
echo A & echo B
:: && - Do B if A returns zero (success)
echo A && echo B
:: || - Do B if A returns non-zero (fail)
echo A && echo B
:: Parenthesized command works like one simple command
(echo A & echo B) | more

:: Redirect stderr (1 for stdin) to nowhere
dir 2> NUL

:: Overwrites
echo 3 > foo
:: Append
echo 1 >> foo
echo 2 >> foo

sort < foo

:: Redirect to handle h (0 - stdin, 1 - stdout, 2 - strerr)
:: >&h

:: Redirect from handle h
:: <&h

:: Redirect to foo with errors
dir nofile > foo 2>&1

:: To different files
dir nofile > foo 2> bar

>foo echo Redirect can be first

:: Only second
echo A & echo B > foo

:: Both
(echo A & echo B) > foo

:: Redirect console input to file (ctrl+z to stop)
:: type con > foo

set unsetedVar=

echo Full pathname of command interpreter program file: %COMSPEC%

echo PATH: %PATH%
echo PATHEXT: %PATHEXT%
:: Add .PL
setx PATHEXT %PATHEXT%;.PL

echo PROMPT %PROMPT%

if %errorlevel% equ 0 echo Errorlevel is zero (success)
:: Set errorlevel to 2
cmd /c "exit /b 2"
if %errorlevel% neq 0 echo Errorlevel is non-zero (fail)
if errorlevel 1 echo Errorlevel is higher than 1

:: End batch file with errorlevel 1
:: exit /b 1

(cmd /c "exit /b 0" && Echo SUCCESS) & (cmd /c "exit /b -1" || Echo FAIL)
:: Chain
(cmd /c "exit /b 0" & cmd /c "exit /b 1") || Echo FAIL

set ErrorLevelBackUp=%errorlevel%

set string=text
:: Substring: from index, length
echo %string:~1,2%
:: Substring: from index to the end
echo %string:~2%
:: Substring: 3 last chars
echo %string:~-3%
:: Substring: from -4 to -1
echo %string:~-4,-1%

if %string:~0,2%==te echo '%string%' starts with 'te'

:: Remove all 't' from string
echo %string:t=%
:: Replace 'te' to 'ne'
echo %string:te=ne%
:: Replace 'x' and everything before to 'le'
echo %string:*x=le%

:: Split with: comma, space, semicolon
set variable=A,B C;D
for %%i in (%variable%) do echo %%i

echo First arg: %1
echo Second arg: %2
echo Batch file: %0

if not _%1_==__ echo First arg is here
if _%9_==__ echo Arg 9 is not here

:: Iter args with shift
:: :argIterStart
:: if -%1-==-- goto argIterEnd
:: echo %1 & REM Can get arg over 9
:: shift
:: goto argIterStart
:: :argIterEnd

:: Assign arguments to argN vars
set argCount=0
:argIterStart
if _%1_==__ goto argIterEnd
set /a argCount+=1
set arg%argCount%=%1
shift
goto argIterStart
:argIterEnd
echo Now first arg is arg1: %arg1%
echo Arguments count: %argCount%

:: Beware wildcards
for %%i in (%*) do (
  echo %%i
)

set argumentsAmount=0
for %%i in (%*) do set /a argumentsAmount+=1
echo Arguments amount: %argumentsAmount%

:: Same 4 args
:: test.bat a b c d
:: test.bat a,b,c,d
:: test.bat a, b, c, d
:: test.bat a;b;c;d
:: test.bat a=b=c=d
:: test.bat a=b,=c,;=d

dir *.bat
dir *.b?t
dir ??o
dir ????????.bat & REM Eight "?" - same as * here

:: Ask for var value
:: SET /P var=
:: Ask for some choice
:: CHOICE

:: End script
:: goto :eof

call :someFunction result, peoples
echo %result%
call :someFunction result users
echo %result%
echo No someLocal here: %someLocal%
goto :jumpOverSomeFunction

:someFunction
setlocal
set someLocal=local
endlocal & set %1=Hello %someLocal% %2
exit /b

:jumpOverSomeFunction

set /a calc=0xFF^^100
echo %calc%
set /a "calc=0xFF^100"
echo %calc%
set /a calc="0xFF^100"
echo %calc%

set A=100 & set B=10
set /a calc = (0xFF - A + %B%) %% 5
echo %calc%

:: Arithmetic brackets within grouping brackets = trouble
:: if SOMETIHNG (set /a SOME=(1+2)*3)
:: Works with ^ escaping or "..."
:: if SOMETIHNG (set /a SOME=^(1+2^)*3)
:: if SOMETIHNG (set /a "SOME=(1+2)*3")

set /a A=20, B=C=30 & set /a D = %random% %% 0x05
echo %A%, %B%, %C%, %D%
